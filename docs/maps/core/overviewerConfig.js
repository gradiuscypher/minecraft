var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "pan": true,
            "zoom": true
        },
        "cacheTag": "1595250081",
        "debug": true
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "defaultZoom": 1,
            "maxZoom": 9,
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "base": "",
            "zoomLevels": 9,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "world": "Core01",
            "poititle": "Markers",
            "imgextension": "png",
            "last_rendertime": 1595249880,
            "isOverlay": false
        }
    ]
};
