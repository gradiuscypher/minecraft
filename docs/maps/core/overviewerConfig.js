var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1594299690",
        "debug": true,
        "controls": {
            "pan": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "mapType": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "path": "day",
            "last_rendertime": 1594299370,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "zoomLevels": 9,
            "showlocationmarker": true,
            "poititle": "Markers",
            "minZoom": 0,
            "maxZoom": 9,
            "isOverlay": false,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "imgextension": "png"
        }
    ]
};
