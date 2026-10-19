"""
SVG Renderer Engine for TKA CBT Questions.
Provides parametric vector graphics for:
1. Cartesius Coordinate System & Linear Programming Feasible Regions (DHP).
2. 3D Geometry (Kubus ABCD.EFGH and Limas T.ABCD).

All outputs are clean, self-contained SVG strings compatible with Paper Cream Theme.
"""

import math
from typing import List, Tuple, Dict, Any, Optional, Union

def render_cartesius_dhp(
    lines: List[Dict[str, Any]],
    shaded_polygon: Optional[List[Tuple[float, float]]] = None,
    roman_regions: Optional[Dict[str, Tuple[float, float]]] = None,
    labeled_points: Optional[List[Tuple[float, float, str]]] = None,
    width: int = 360,
    height: int = 260
) -> str:
    """
    Renders a 2D Cartesian plane with linear inequality lines, tick marks,
    and either a shaded feasible polygon or Roman numeral region labels (I, II, III, IV, V).
    
    Each line in lines:
      {"x_int": float, "y_int": float, "label": Optional[str]}
      meaning the line intersects (x_int, 0) and (0, y_int).
    """
    # Determine bounds
    all_x = [line["x_int"] for line in lines if line.get("x_int")] + [0.0]
    all_y = [line["y_int"] for line in lines if line.get("y_int")] + [0.0]
    if shaded_polygon:
        all_x.extend([pt[0] for pt in shaded_polygon])
        all_y.extend([pt[1] for pt in shaded_polygon])
    if roman_regions:
        all_x.extend([pt[0] for pt in roman_regions.values()])
        all_y.extend([pt[1] for pt in roman_regions.values()])
    if labeled_points:
        all_x.extend([pt[0] for pt in labeled_points])
        all_y.extend([pt[1] for pt in labeled_points])

    max_x = max(all_x) if all_x else 10.0
    max_y = max(all_y) if all_y else 10.0
    
    # Margins and scale
    margin_left = 45
    margin_right = 25
    margin_top = 25
    margin_bottom = 35
    
    plot_w = width - margin_left - margin_right
    plot_h = height - margin_top - margin_bottom
    
    scale_x = plot_w / (max_x * 1.25 if max_x > 0 else 1.0)
    scale_y = plot_h / (max_y * 1.25 if max_y > 0 else 1.0)
    
    def to_svg(x: float, y: float) -> Tuple[float, float]:
        sx = margin_left + x * scale_x
        sy = height - margin_bottom - y * scale_y
        return (round(sx, 1), round(sy, 1))

    ox, oy = to_svg(0, 0)
    axis_end_x = width - margin_right + 15
    axis_end_y = margin_top - 10

    elements = []

    # Defs: Hatch pattern for shading and arrow markers
    defs = """
    <defs>
      <pattern id="dhp-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#475569" stroke-width="1.2" opacity="0.6"/>
      </pattern>
      <marker id="axis-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>
    """
    elements.append(defs)

    # Shaded polygon if specified
    if shaded_polygon and len(shaded_polygon) >= 3:
        svg_pts = [f"{to_svg(pt[0], pt[1])[0]},{to_svg(pt[0], pt[1])[1]}" for pt in shaded_polygon]
        poly_str = " ".join(svg_pts)
        elements.append(
            f'<polygon points="{poly_str}" fill="url(#dhp-hatch)" stroke="#334155" stroke-width="1.5" stroke-dasharray="3,2" />'
        )

    # Coordinate Axes
    # X axis
    elements.append(
        f'<line x1="{margin_left - 15}" y1="{oy}" x2="{axis_end_x}" y2="{oy}" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arrow)" />'
    )
    elements.append(
        f'<text x="{axis_end_x + 6}" y="{oy + 4}" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b">X</text>'
    )
    # Y axis
    elements.append(
        f'<line x1="{ox}" y1="{oy + 15}" x2="{ox}" y2="{axis_end_y}" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arrow)" />'
    )
    elements.append(
        f'<text x="{ox - 4}" y="{axis_end_y - 6}" font-family="system-ui, sans-serif" font-size="12" font-weight="700" fill="#1e293b" text-anchor="middle">Y</text>'
    )
    # Origin 0
    elements.append(
        f'<text x="{ox - 10}" y="{oy + 15}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#475569">0</text>'
    )

    # Draw lines and intercept ticks
    drawn_ticks_x = set()
    drawn_ticks_y = set()

    for idx, ln in enumerate(lines):
        xi = ln.get("x_int")
        yi = ln.get("y_int")
        if not xi or not yi:
            continue

        # Points on axes
        p_x = to_svg(xi, 0)
        p_y = to_svg(0, yi)

        # Extend slightly beyond axes for realistic mathematical look
        dx = p_x[0] - p_y[0]
        dy = p_x[1] - p_y[1]
        ext1_x = p_y[0] - 0.12 * dx
        ext1_y = p_y[1] - 0.12 * dy
        ext2_x = p_x[0] + 0.15 * dx
        ext2_y = p_x[1] + 0.15 * dy

        stroke_color = "#1e293b" if idx == 0 else "#334155"
        elements.append(
            f'<line x1="{round(ext1_x, 1)}" y1="{round(ext1_y, 1)}" x2="{round(ext2_x, 1)}" y2="{round(ext2_y, 1)}" stroke="{stroke_color}" stroke-width="2" />'
        )

        # X tick & label
        if xi not in drawn_ticks_x:
            drawn_ticks_x.add(xi)
            lbl_xi = f"{int(xi)}" if float(xi).is_integer() else f"{xi:.1f}"
            elements.append(
                f'<line x1="{p_x[0]}" y1="{oy - 3}" x2="{p_x[0]}" y2="{oy + 3}" stroke="#1e293b" stroke-width="1.5" />'
            )
            elements.append(
                f'<text x="{p_x[0]}" y="{oy + 17}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">{lbl_xi}</text>'
            )

        # Y tick & label
        if yi not in drawn_ticks_y:
            drawn_ticks_y.add(yi)
            lbl_yi = f"{int(yi)}" if float(yi).is_integer() else f"{yi:.1f}"
            elements.append(
                f'<line x1="{ox - 3}" y1="{p_y[1]}" x2="{ox + 3}" y2="{p_y[1]}" stroke="#1e293b" stroke-width="1.5" />'
            )
            elements.append(
                f'<text x="{ox - 8}" y="{p_y[1] + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="end">{lbl_yi}</text>'
            )

    # Roman numeral regions (I, II, III, IV, V)
    if roman_regions:
        for roman, coord in roman_regions.items():
            rx, ry = to_svg(coord[0], coord[1])
            # Circle badge + Roman numeral text
            elements.append(
                f'<circle cx="{rx}" cy="{ry}" r="11" fill="#f8fafc" stroke="#475569" stroke-width="1.2" />'
            )
            elements.append(
                f'<text x="{rx}" y="{ry + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">{roman}</text>'
            )

    # Labeled points (e.g. intersection points, corner points)
    if labeled_points:
        for pt in labeled_points:
            pt_x, pt_y, lbl = pt[0], pt[1], pt[2]
            sx, sy = to_svg(pt_x, pt_y)
            elements.append(
                f'<circle cx="{sx}" cy="{sy}" r="3.5" fill="#b84f2d" stroke="#1e293b" stroke-width="1.2" />'
            )
            elements.append(
                f'<text x="{sx + 6}" y="{sy - 6}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0f172a">{lbl}</text>'
            )

    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_kubus(
    rusuk_text: Optional[str] = None,
    highlight_lines: Optional[List[Tuple[str, str]]] = None,
    highlight_points: Optional[List[str]] = None,
    show_diagonals: Optional[List[Tuple[str, str]]] = None,
    width: int = 340,
    height: int = 260
) -> str:
    """
    Renders an oblique projection of cube ABCD.EFGH.
    Hidden edges (AD, DC, DH) are drawn with dashed lines.
    Visible edges are solid lines.
    Allows highlighting specific vertices and segments (e.g. diagonal ruang, distances).
    """
    x0, y0 = 65.0, 205.0
    w = 125.0
    h = 125.0
    dx = 55.0
    dy = 42.0

    # Vertices
    coords = {
        "A": (x0, y0),
        "B": (x0 + w, y0),
        "C": (x0 + w + dx, y0 - dy),
        "D": (x0 + dx, y0 - dy),
        "E": (x0, y0 - h),
        "F": (x0 + w, y0 - h),
        "G": (x0 + w + dx, y0 - dy - h),
        "H": (x0 + dx, y0 - dy - h),
    }

    # Center of base O (intersection of AC and BD)
    coords["O"] = (
        (coords["A"][0] + coords["C"][0]) / 2,
        (coords["A"][1] + coords["C"][1]) / 2
    )

    elements = []

    # Solid edges
    solid_edges = [
        ("A", "B"), ("B", "C"),
        ("E", "F"), ("F", "G"), ("G", "H"), ("H", "E"),
        ("A", "E"), ("B", "F"), ("C", "G")
    ]
    # Dashed edges (occluded)
    dashed_edges = [
        ("A", "D"), ("D", "C"), ("D", "H")
    ]

    # Draw dashed edges first
    for u, v in dashed_edges:
        p1, p2 = coords[u], coords[v]
        elements.append(
            f'<line x1="{p1[0]}" y1="{p1[1]}" x2="{p2[0]}" y2="{p2[1]}" stroke="#64748b" stroke-width="1.8" stroke-dasharray="4,4" />'
        )

    # Optional auxiliary / base diagonals
    if show_diagonals:
        for u, v in show_diagonals:
            if u in coords and v in coords:
                p1, p2 = coords[u], coords[v]
                elements.append(
                    f'<line x1="{p1[0]}" y1="{p1[1]}" x2="{p2[0]}" y2="{p2[1]}" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3,3" />'
                )

    # Draw solid edges
    for u, v in solid_edges:
        p1, p2 = coords[u], coords[v]
        elements.append(
            f'<line x1="{p1[0]}" y1="{p1[1]}" x2="{p2[0]}" y2="{p2[1]}" stroke="#1e293b" stroke-width="2" />'
        )

    # Highlighted segments (e.g. target distance or line of interest)
    if highlight_lines:
        for u, v in highlight_lines:
            if u in coords and v in coords:
                p1, p2 = coords[u], coords[v]
                elements.append(
                    f'<line x1="{p1[0]}" y1="{p1[1]}" x2="{p2[0]}" y2="{p2[1]}" stroke="#b84f2d" stroke-width="2.6" stroke-linecap="round" />'
                )

    # Vertex labels positions (offset to stay outside the box)
    offsets = {
        "A": (-14, 14),
        "B": (8, 14),
        "C": (10, 4),
        "D": (-14, -6),
        "E": (-14, -8),
        "F": (8, -8),
        "G": (10, -6),
        "H": (-14, -10),
        "O": (0, 16)
    }

    # Draw vertex points and labels
    active_points = ["A", "B", "C", "D", "E", "F", "G", "H"]
    if highlight_points:
        for hp in highlight_points:
            if hp not in active_points and hp in coords:
                active_points.append(hp)

    for pt in active_points:
        px, py = coords[pt]
        ox_pt, oy_pt = offsets.get(pt, (0, 0))
        is_highlighted = highlight_points and pt in highlight_points
        dot_fill = "#b84f2d" if is_highlighted else "#1e293b"
        label_fill = "#b84f2d" if is_highlighted else "#0f172a"
        radius = 4 if is_highlighted else 2.5

        elements.append(
            f'<circle cx="{px}" cy="{py}" r="{radius}" fill="{dot_fill}" />'
        )
        elements.append(
            f'<text x="{px + ox_pt}" y="{py + oy_pt}" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="{label_fill}" text-anchor="middle">{pt}</text>'
        )

    # Rusuk dimension text annotation if specified
    if rusuk_text:
        mid_x = (coords["A"][0] + coords["B"][0]) / 2
        mid_y = coords["A"][1] + 16
        elements.append(
            f'<text x="{mid_x}" y="{mid_y}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569" text-anchor="middle">{rusuk_text}</text>'
        )

    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_grafik_vt(t1: int, t2: int, t3: int, vt: int, width: int = 360, height: int = 220) -> str:
    margin_l = 45
    margin_r = 30
    margin_b = 35
    margin_t = 25
    pw = width - margin_l - margin_r
    ph = height - margin_t - margin_b
    
    ox, oy = margin_l, height - margin_b
    sx = lambda t: ox + (t / t3) * pw
    sy = lambda v: oy - (v / vt) * ph
    
    p1 = (round(sx(0), 1), round(sy(0), 1))
    p2 = (round(sx(t1), 1), round(sy(vt), 1))
    p3 = (round(sx(t2), 1), round(sy(vt), 1))
    p4 = (round(sx(t3), 1), round(sy(0), 1))
    
    poly_pts = f"{p1[0]},{p1[1]} {p2[0]},{p2[1]} {p3[0]},{p3[1]} {p4[0]},{p4[1]}"
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <pattern id="vt-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#475569" stroke-width="1.2" opacity="0.6"/>
    </pattern>
    <marker id="axis-arr-vt" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <!-- Shaded Area Under v-t Graph -->
  <polygon points="{poly_pts}" fill="url(#vt-hatch)" stroke="#334155" stroke-width="1.5" />
  <!-- Axes -->
  <line x1="{ox - 10}" y1="{oy}" x2="{width - margin_r + 15}" y2="{oy}" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arr-vt)" />
  <text x="{width - margin_r + 6}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">t (s)</text>
  <line x1="{ox}" y1="{oy + 10}" x2="{ox}" y2="{margin_t - 10}" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arr-vt)" />
  <text x="{ox - 4}" y="{margin_t - 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">v (m/s)</text>
  <!-- Dashed Projection Lines -->
  <line x1="{ox}" y1="{p2[1]}" x2="{p2[0]}" y2="{p2[1]}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="{p2[0]}" y1="{p2[1]}" x2="{p2[0]}" y2="{oy}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <line x1="{p3[0]}" y1="{p3[1]}" x2="{p3[0]}" y2="{oy}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <!-- Graph Stroke Line -->
  <polyline points="{poly_pts}" fill="none" stroke="#b84f2d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  <!-- Ticks and Labels -->
  <text x="{ox - 8}" y="{p2[1] + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="end">{vt}</text>
  <text x="{ox - 8}" y="{oy + 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="end">0</text>
  <text x="{p2[0]}" y="{oy + 15}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">{t1}</text>
  <text x="{p3[0]}" y="{oy + 15}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">{t2}</text>
  <text x="{p4[0]}" y="{oy + 15}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">{t3}</text>
</svg>'''


def render_fbd_balok(m_kg: int, f_kanan: Optional[int] = None, f_kiri: Optional[int] = None, show_normal_weight: bool = True, width: int = 340, height: int = 200) -> str:
    floor_y = 135
    bx, by = 130, 75
    bw, bh = 80, 60
    mid_x = bx + bw / 2
    mid_y = by + bh / 2
    
    elements = []
    defs = '''<defs>
      <marker id="arr-fbd-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b84f2d"/>
      </marker>
      <marker id="arr-fbd-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
      </marker>
      <marker id="arr-fbd-dark" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
      </marker>
    </defs>'''
    elements.append(defs)
    
    # Floor line & hatch
    elements.append(f'<line x1="30" y1="{floor_y}" x2="310" y2="{floor_y}" stroke="#1e293b" stroke-width="2"/>')
    for hx in range(35, 305, 12):
        elements.append(f'<line x1="{hx}" y1="{floor_y}" x2="{hx - 6}" y2="{floor_y + 8}" stroke="#64748b" stroke-width="1.2"/>')
    
    # Block
    elements.append(f'<rect x="{bx}" y="{by}" width="{bw}" height="{bh}" rx="4" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>')
    elements.append(f'<text x="{mid_x}" y="{mid_y + 4}" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#0f172a" text-anchor="middle">m = {m_kg} kg</text>')
    
    # Forces
    if f_kanan is not None:
        elements.append(f'<line x1="{bx + bw}" y1="{mid_y}" x2="{bx + bw + 65}" y2="{mid_y}" stroke="#b84f2d" stroke-width="2.5" marker-end="url(#arr-fbd-red)"/>')
        elements.append(f'<text x="{bx + bw + 35}" y="{mid_y - 8}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b84f2d" text-anchor="middle">F = {f_kanan} N</text>')
        
    if f_kiri is not None:
        elements.append(f'<line x1="{bx}" y1="{mid_y}" x2="{bx - 60}" y2="{mid_y}" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-fbd-blue)"/>')
        elements.append(f'<text x="{bx - 30}" y="{mid_y - 8}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7" text-anchor="middle">f = {f_kiri} N</text>')
        
    if show_normal_weight:
        elements.append(f'<line x1="{mid_x}" y1="{by}" x2="{mid_x}" y2="{by - 45}" stroke="#475569" stroke-width="1.8" marker-end="url(#arr-fbd-dark)"/>')
        elements.append(f'<text x="{mid_x + 12}" y="{by - 25}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">N</text>')
        elements.append(f'<line x1="{mid_x}" y1="{floor_y}" x2="{mid_x}" y2="{floor_y + 45}" stroke="#475569" stroke-width="1.8" marker-end="url(#arr-fbd-dark)"/>')
        elements.append(f'<text x="{mid_x + 12}" y="{floor_y + 35}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#475569">W</text>')
        
    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_dua_balok(m1: int, m2: int, f_push: int, width: int = 340, height: int = 180) -> str:
    floor_y = 125
    x_contact = 155
    w1, h1 = 55, 60
    w2, h2 = 70, 75
    
    b1_x = x_contact - w1
    b1_y = floor_y - h1
    b2_x = x_contact
    b2_y = floor_y - h2
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <marker id="arr-push" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b84f2d"/>
    </marker>
  </defs>
  <!-- Floor -->
  <line x1="25" y1="{floor_y}" x2="315" y2="{floor_y}" stroke="#1e293b" stroke-width="2"/>
  <!-- Block A -->
  <rect x="{b1_x}" y="{b1_y}" width="{w1}" height="{h1}" rx="3" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
  <text x="{b1_x + w1/2}" y="{b1_y + h1/2 - 4}" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">A</text>
  <text x="{b1_x + w1/2}" y="{b1_y + h1/2 + 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">{m1} kg</text>
  <!-- Block B -->
  <rect x="{b2_x}" y="{b2_y}" width="{w2}" height="{h2}" rx="3" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <text x="{b2_x + w2/2}" y="{b2_y + h2/2 - 4}" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">B</text>
  <text x="{b2_x + w2/2}" y="{b2_y + h2/2 + 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="middle">{m2} kg</text>
  <!-- Push Force Arrow -->
  <line x1="{b1_x - 55}" y1="{floor_y - h1/2}" x2="{b1_x}" y2="{floor_y - h1/2}" stroke="#b84f2d" stroke-width="2.5" marker-end="url(#arr-push)"/>
  <text x="{b1_x - 28}" y="{floor_y - h1/2 - 8}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b84f2d" text-anchor="middle">F = {f_push} N</text>
</svg>'''


def render_grafik_fs(s_val: int, f_val: int, width: int = 340, height: int = 200) -> str:
    margin_l = 45
    margin_b = 35
    ox, oy = margin_l, height - margin_b
    plot_x = ox + 190
    plot_y = oy - 95
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <pattern id="fs-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#475569" stroke-width="1.2" opacity="0.6"/>
    </pattern>
    <marker id="axis-arr-fs" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <!-- Shaded Area W = F * s -->
  <rect x="{ox}" y="{plot_y}" width="{plot_x - ox}" height="{oy - plot_y}" fill="url(#fs-hatch)" stroke="#334155" stroke-width="1.5" />
  <text x="{(ox + plot_x)/2}" y="{(oy + plot_y)/2 + 4}" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="middle">Usaha (W)</text>
  <!-- Axes -->
  <line x1="{ox - 10}" y1="{oy}" x2="{width - 25}" y2="{oy}" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arr-fs)" />
  <text x="{width - 15}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">s (m)</text>
  <line x1="{ox}" y1="{oy + 10}" x2="{ox}" y2="20" stroke="#1e293b" stroke-width="1.8" marker-end="url(#axis-arr-fs)" />
  <text x="{ox - 4}" y="12" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">F (N)</text>
  <!-- Line and projections -->
  <line x1="{ox}" y1="{plot_y}" x2="{plot_x}" y2="{plot_y}" stroke="#b84f2d" stroke-width="2.5" />
  <line x1="{plot_x}" y1="{plot_y}" x2="{plot_x}" y2="{oy}" stroke="#94a3b8" stroke-width="1.2" stroke-dasharray="3,3" />
  <!-- Labels -->
  <text x="{ox - 8}" y="{plot_y + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="end">{f_val}</text>
  <text x="{plot_x}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">{s_val}</text>
  <text x="{ox - 8}" y="{oy + 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#64748b" text-anchor="end">0</text>
</svg>'''


def render_rangkaian_listrik(v_val: int, r1: int, r2: Optional[int] = None, is_parallel: bool = False, width: int = 340, height: int = 200) -> str:
    elements = []
    # Outer frame
    elements.append('<rect x="50" y="40" width="240" height="120" fill="none" stroke="#1e293b" stroke-width="2"/>')
    # DC Voltage source on left vertical branch (x=50)
    elements.append('<rect x="42" y="80" width="16" height="40" fill="#ffffff" stroke="none"/>')
    elements.append('<line x1="40" y1="92" x2="60" y2="92" stroke="#1e293b" stroke-width="2.5"/>')
    elements.append('<line x1="45" y1="104" x2="55" y2="104" stroke="#1e293b" stroke-width="3"/>')
    elements.append(f'<text x="32" y="103" font-family="system-ui, sans-serif" font-size="12" font-weight="800" fill="#0f172a" text-anchor="end">{v_val} V</text>')
    
    if not is_parallel:
        # Resistor on top branch (y=40)
        elements.append('<rect x="145" y="32" width="50" height="16" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>')
        elements.append(f'<text x="170" y="24" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b84f2d" text-anchor="middle">R = {r1} Ω</text>')
    else:
        # Parallel branches
        elements.append('<rect x="135" y="30" width="100" height="80" fill="none" stroke="#1e293b" stroke-width="2"/>')
        # Top branch resistor
        elements.append('<rect x="160" y="22" width="48" height="16" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>')
        elements.append(f'<text x="184" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b84f2d" text-anchor="middle">R₁ = {r1} Ω</text>')
        # Bottom branch resistor
        elements.append('<rect x="160" y="102" width="48" height="16" fill="#ffffff" stroke="#1e293b" stroke-width="1.8"/>')
        elements.append(f'<text x="184" y="132" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7" text-anchor="middle">R₂ = {r2} Ω</text>')
        
    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_parabola_fisika(v0: int, angle_deg: int, h_max: Optional[Union[int, str]] = "?", width: int = 340, height: int = 200) -> str:
    ground_y = 160
    apex_x, apex_y = 160, 60
    end_x = 270
    
    h_max_str = f"h_max = {h_max} m" if isinstance(h_max, (int, float)) and h_max != "?" else (f"h_max = {h_max}" if h_max != "?" else "h_max = ?")
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <marker id="arr-v0" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b84f2d"/>
    </marker>
  </defs>
  <!-- Ground -->
  <line x1="30" y1="{ground_y}" x2="310" y2="{ground_y}" stroke="#1e293b" stroke-width="2"/>
  <!-- Trajectory Arc -->
  <path d="M 50 {ground_y} Q {apex_x} -40 {end_x} {ground_y}" fill="none" stroke="#1e293b" stroke-width="2" stroke-dasharray="4,4" />
  <!-- Apex Point & h_max -->
  <line x1="{apex_x}" y1="{apex_y}" x2="{apex_x}" y2="{ground_y}" stroke="#64748b" stroke-width="1.4" stroke-dasharray="3,3" />
  <circle cx="{apex_x}" cy="{apex_y}" r="3.5" fill="#b84f2d" />
  <text x="{apex_x + 8}" y="{(apex_y + ground_y)/2}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#b84f2d">{h_max_str}</text>
  <!-- Velocity Vector v0 -->
  <line x1="50" y1="{ground_y}" x2="95" y2="105" stroke="#b84f2d" stroke-width="2.5" marker-end="url(#arr-v0)" />
  <text x="75" y="95" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d">v₀ = {v0} m/s</text>
  <!-- Angle Arc -->
  <path d="M 75 {ground_y} A 25 25 0 0 0 70 142" fill="none" stroke="#0f172a" stroke-width="1.5" />
  <text x="82" y="152" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#0f172a">{angle_deg}°</text>
</svg>'''


def render_vektor_sungai(vp: int, va: int, vtot: Optional[Union[int, str]] = "?", width: int = 320, height: int = 200) -> str:
    vtot_str = f"v_total = {vtot} m/s" if isinstance(vtot, (int, float)) and vtot != "?" else (f"v_total = {vtot}" if vtot != "?" else "v_total = ?")
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <marker id="arr-vp" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
    <marker id="arr-va" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
    <marker id="arr-vt" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b84f2d"/>
    </marker>
  </defs>
  <!-- River Banks -->
  <line x1="20" y1="45" x2="300" y2="45" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="20" y1="165" x2="300" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="25" y="38" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">Tepi Seberang</text>
  <text x="25" y="180" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b">Tepi Awal</text>
  <!-- Boat Vector (vertical up) -->
  <line x1="80" y1="165" x2="80" y2="70" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-vp)"/>
  <text x="70" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#0284c7" text-anchor="end">v_perahu = {vp} m/s</text>
  <!-- Current Vector (horizontal right) -->
  <line x1="80" y1="70" x2="190" y2="70" stroke="#1e293b" stroke-width="2" marker-end="url(#arr-va)"/>
  <text x="135" y="60" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b" text-anchor="middle">v_arus = {va} m/s</text>
  <!-- Resultant Vector (diagonal) -->
  <line x1="80" y1="165" x2="190" y2="70" stroke="#b84f2d" stroke-width="2.5" stroke-dasharray="4,2" marker-end="url(#arr-vt)"/>
  <text x="145" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d">{vtot_str}</text>
  <!-- Right Angle Symbol -->
  <rect x="80" y="70" width="10" height="10" fill="none" stroke="#1e293b" stroke-width="1.2"/>
</svg>'''


def render_lingkaran_sudut(mode: str = "pusat_keliling", sudut_keliling: Optional[int] = None, sudut_pusat: Optional[Union[int, str]] = None, sudut_a: Optional[int] = None, sudut_c: Optional[Union[int, str]] = None, width: int = 300, height: int = 240) -> str:
    cx, cy = 150, 120
    r = 80
    elements = []
    elements.append(f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>')
    
    if mode == "pusat_keliling":
        elements.append(f'<circle cx="{cx}" cy="{cy}" r="3" fill="#1e293b"/>')
        elements.append(f'<text x="{cx + 10}" y="{cy + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">O</text>')
        ax, ay = cx - 60, cy + 53
        bx, by = cx + 60, cy + 53
        px, py = cx - 25, cy - 76
        elements.append(f'<line x1="{cx}" y1="{cy}" x2="{ax}" y2="{ay}" stroke="#b84f2d" stroke-width="2"/>')
        elements.append(f'<line x1="{cx}" y1="{cy}" x2="{bx}" y2="{by}" stroke="#b84f2d" stroke-width="2"/>')
        elements.append(f'<line x1="{px}" y1="{py}" x2="{ax}" y2="{ay}" stroke="#0284c7" stroke-width="1.8"/>')
        elements.append(f'<line x1="{px}" y1="{py}" x2="{bx}" y2="{by}" stroke="#0284c7" stroke-width="1.8"/>')
        elements.append(f'<text x="{ax - 12}" y="{ay + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">A</text>')
        elements.append(f'<text x="{bx + 6}" y="{ay + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">B</text>')
        txt_c = f"C ({sudut_keliling}°)" if sudut_keliling is not None else "C"
        elements.append(f'<text x="{px - 4}" y="{py - 8}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">{txt_c}</text>')
        txt_pusat = f"{sudut_pusat}°" if isinstance(sudut_pusat, int) else (str(sudut_pusat) if sudut_pusat is not None else "?")
        elements.append(f'<text x="{cx}" y="{cy + 24}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d" text-anchor="middle">{txt_pusat}</text>')
    else:
        ang_a = f"{sudut_a}°" if sudut_a is not None else ""
        ang_c = f"{sudut_c}°" if isinstance(sudut_c, int) else (str(sudut_c) if sudut_c is not None else "?")
        pts = [
            (cx - 55, cy + 58, "A", ang_a),
            (cx + 65, cy + 46, "B", ""),
            (cx + 50, cy - 62, "C", ang_c),
            (cx - 60, cy - 52, "D", "")
        ]
        poly_str = " ".join([f"{p[0]},{p[1]}" for p in pts])
        elements.append(f'<polygon points="{poly_str}" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>')
        for px, py, lbl, ang in pts:
            elements.append(f'<circle cx="{px}" cy="{py}" r="3.5" fill="#b84f2d"/>')
            txt = f"{lbl} ({ang})" if ang else lbl
            elements.append(f'<text x="{px + 6}" y="{py + 4}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a">{txt}</text>')
            
    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_lingkaran_juring(theta_deg: int, r_cm: Optional[int] = None, width: int = 280, height: int = 240) -> str:
    cx, cy = 140, 120
    r = 80
    rad = math.radians(theta_deg)
    ex = cx + r * math.cos(rad)
    ey = cy - r * math.sin(rad)
    large_arc = 1 if theta_deg > 180 else 0
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <pattern id="juring-hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="8" stroke="#475569" stroke-width="1.2" opacity="0.6"/>
    </pattern>
  </defs>
  <!-- Full circle outline -->
  <circle cx="{cx}" cy="{cy}" r="{r}" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3"/>
  <!-- Shaded Sector -->
  <path d="M {cx} {cy} L {cx + r} {cy} A {r} {r} 0 {large_arc} 0 {ex:.1f} {ey:.1f} Z" fill="url(#juring-hatch)" stroke="#1e293b" stroke-width="2"/>
  <!-- Center O -->
  <circle cx="{cx}" cy="{cy}" r="3" fill="#1e293b"/>
  <text x="{cx - 10}" y="{cy + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">O</text>
  <!-- Labels -->
  <text x="{cx + r/2}" y="{cy + 16}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">r = {r_cm} cm</text>
  <text x="{cx + 25}" y="{cy - 12}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d">{theta_deg}°</text>
</svg>'''


def render_vektor_2d_cartesius(u: Tuple[float, float], v: Tuple[float, float], u_label: Optional[str] = None, v_label: Optional[str] = None, width: int = 300, height: int = 240) -> str:
    ox, oy = 150, 120
    max_val = max(abs(u[0]), abs(u[1]), abs(v[0]), abs(v[1]), 1.0)
    scale = min(22.0, 95.0 / max_val)
    u_sx = ox + u[0] * scale
    u_sy = oy - u[1] * scale
    v_sx = ox + v[0] * scale
    v_sy = oy - v[1] * scale
    lbl_u = u_label if u_label is not None else f"u({u[0]}, {u[1]})"
    lbl_v = v_label if v_label is not None else f"v({v[0]}, {v[1]})"
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <defs>
    <marker id="arr-u" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#b84f2d"/>
    </marker>
    <marker id="arr-v" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0284c7"/>
    </marker>
    <marker id="arr-axis-vec" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <!-- Axes -->
  <line x1="25" y1="{oy}" x2="{width - 25}" y2="{oy}" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arr-axis-vec)"/>
  <line x1="{ox}" y1="{height - 20}" x2="{ox}" y2="20" stroke="#94a3b8" stroke-width="1.4" marker-end="url(#arr-axis-vec)"/>
  <text x="{width - 15}" y="{oy + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">X</text>
  <text x="{ox - 8}" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Y</text>
  <!-- Vector u -->
  <line x1="{ox}" y1="{oy}" x2="{u_sx:.1f}" y2="{u_sy:.1f}" stroke="#b84f2d" stroke-width="2.5" marker-end="url(#arr-u)"/>
  <text x="{u_sx + 6:.1f}" y="{u_sy - 4:.1f}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d">{lbl_u}</text>
  <!-- Vector v -->
  <line x1="{ox}" y1="{oy}" x2="{v_sx:.1f}" y2="{v_sy:.1f}" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arr-v)"/>
  <text x="{v_sx + 6:.1f}" y="{v_sy - 4:.1f}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0284c7">{lbl_v}</text>
</svg>'''


def render_lingkaran_cartesius(a: int, b: int, r: int, tangent_pt: Optional[Tuple[int, int]] = None, r_label: Optional[str] = None, width: int = 320, height: int = 260) -> str:
    ox, oy = 160, 130
    scale = min(18.0, 95.0 / max(1, r))
    cx = ox + a * scale
    cy = oy - b * scale
    cr = r * scale
    
    elements = []
    # Grid axes
    elements.append(f'<line x1="25" y1="{oy}" x2="{width - 25}" y2="{oy}" stroke="#94a3b8" stroke-width="1.5"/>')
    elements.append(f'<line x1="{ox}" y1="{height - 20}" x2="{ox}" y2="20" stroke="#94a3b8" stroke-width="1.5"/>')
    elements.append(f'<text x="{width - 15}" y="{oy + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">X</text>')
    elements.append(f'<text x="{ox - 8}" y="15" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b">Y</text>')
    
    # Circle
    elements.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{cr:.1f}" fill="none" stroke="#1e293b" stroke-width="2"/>')
    elements.append(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="3.5" fill="#b84f2d"/>')
    elements.append(f'<text x="{cx + 6:.1f}" y="{cy - 6:.1f}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#b84f2d">P({a}, {b})</text>')
    
    # Radius line
    elements.append(f'<line x1="{cx:.1f}" y1="{cy:.1f}" x2="{cx + cr:.1f}" y2="{cy:.1f}" stroke="#64748b" stroke-width="1.2" stroke-dasharray="3,3"/>')
    txt_r = r_label if r_label is not None else f"r = {r}"
    if txt_r:
        elements.append(f'<text x="{cx + cr/2:.1f}" y="{cy - 4:.1f}" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#64748b">{txt_r}</text>')
    
    if tangent_pt:
        tx = ox + tangent_pt[0] * scale
        ty = oy - tangent_pt[1] * scale
        elements.append(f'<circle cx="{tx:.1f}" cy="{ty:.1f}" r="4" fill="#0284c7"/>')
        elements.append(f'<text x="{tx + 6:.1f}" y="{ty - 6:.1f}" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0284c7">({tangent_pt[0]}, {tangent_pt[1]})</text>')
        # Tangent line segment
        dx = -(tangent_pt[1] - b)
        dy = tangent_pt[0] - a
        d_len = math.hypot(dx, dy)
        if d_len > 0:
            norm_dx = (dx / d_len) * 50
            norm_dy = (dy / d_len) * 50
            elements.append(f'<line x1="{tx - norm_dx:.1f}" y1="{ty + norm_dy:.1f}" x2="{tx + norm_dx:.1f}" y2="{ty - norm_dy:.1f}" stroke="#0284c7" stroke-width="1.8"/>')
        
    body = "\n  ".join(elements)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">\n  {body}\n</svg>'


def render_gelombang_trigo(func: str = "sin", A: int = 2, k: int = 2, C: int = 0, title: Optional[str] = None, width: int = 360, height: int = 200) -> str:
    margin_l = 45
    margin_r = 30
    ox, oy = margin_l, 100
    pw = width - margin_l - margin_r
    amp_px = 35.0
    
    points = []
    for deg in range(0, 361, 5):
        rad = math.radians(k * deg)
        val = math.sin(rad) if func == "sin" else math.cos(rad)
        sx = ox + (deg / 360.0) * pw
        sy = oy - (val * amp_px)
        points.append(f"{sx:.1f},{sy:.1f}")
        
    poly_str = " ".join(points)
    c_str = f" + {C}" if C > 0 else (f" - {abs(C)}" if C < 0 else "")
    head_title = f"f(x) = {A}·{func}({k}x){c_str}" if title is None else title
    title_elem = f'<text x="{ox + pw/2}" y="25" font-family="system-ui, sans-serif" font-size="11" font-weight="800" fill="#0f172a" text-anchor="middle">{head_title}</text>' if head_title else ''
    
    peak_val = f"+{A}" if C == 0 else f"{A + C}"
    trough_val = f"-{A}" if C == 0 else f"{-A + C}"
    center_val = "0" if C == 0 else f"{C}"
    
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" class="w-full max-w-sm mx-auto" style="max-width: 100%; height: auto; background: transparent;">
  <!-- X / Center Axis -->
  <line x1="{ox - 10}" y1="{oy}" x2="{width - margin_r + 15}" y2="{oy}" stroke="#1e293b" stroke-width="1.8" />
  <text x="{width - margin_r + 6}" y="{oy + 14}" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#1e293b">x</text>
  <text x="{ox - 8}" y="{oy + 4}" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="end">{center_val}</text>
  <!-- X Ticks -->
  <line x1="{ox}" y1="{oy - 4}" x2="{ox}" y2="{oy + 4}" stroke="#1e293b" stroke-width="1.2"/>
  <text x="{ox}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">0</text>
  <line x1="{ox + pw/2}" y1="{oy - 4}" x2="{ox + pw/2}" y2="{oy + 4}" stroke="#1e293b" stroke-width="1.2"/>
  <text x="{ox + pw/2}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">π rad</text>
  <line x1="{ox + pw}" y1="{oy - 4}" x2="{ox + pw}" y2="{oy + 4}" stroke="#1e293b" stroke-width="1.2"/>
  <text x="{ox + pw}" y="{oy + 16}" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#64748b" text-anchor="middle">2π rad</text>
  <!-- Peak and trough dashed lines -->
  <line x1="{ox}" y1="{oy - amp_px}" x2="{width - margin_r}" y2="{oy - amp_px}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
  <text x="{ox - 8}" y="{oy - amp_px + 4}" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b84f2d" text-anchor="end">{peak_val}</text>
  <line x1="{ox}" y1="{oy + amp_px}" x2="{width - margin_r}" y2="{oy + amp_px}" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />
  <text x="{ox - 8}" y="{oy + amp_px + 4}" font-family="system-ui, sans-serif" font-size="10" font-weight="700" fill="#b84f2d" text-anchor="end">{trough_val}</text>
  <!-- Wave curve -->
  <polyline points="{poly_str}" fill="none" stroke="#b84f2d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
  {title_elem}
</svg>'''

