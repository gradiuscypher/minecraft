var overviewerConfig = {
    "tilesets": [
        {
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "north_direction": 0,
            "world": "Core01",
            "isOverlay": false,
            "poititle": "Markers",
            "base": "",
            "path": "day",
            "name": "Daytime Render",
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "defaultZoom": 1,
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598551080,
            "maxZoom": 10
        }
    ],
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "compass": true,
            "spawn": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598551285"
    },
    "worlds": [
        "Core01"
    ]
};
