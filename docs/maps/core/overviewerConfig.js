var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "maxZoom": 10,
            "defaultZoom": 1,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "base": "",
            "center": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "poititle": "Markers",
            "path": "day",
            "world": "Core01",
            "showlocationmarker": true,
            "north_direction": 0,
            "last_rendertime": 1598630280,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1598630485",
        "controls": {
            "overlays": true,
            "compass": true,
            "mapType": true,
            "spawn": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
