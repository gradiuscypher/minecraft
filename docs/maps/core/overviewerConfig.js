var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1597078882",
        "controls": {
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "compass": true
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "poititle": "Markers",
            "base": "",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "path": "day",
            "maxZoom": 10,
            "center": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "world": "Core01",
            "name": "Daytime Render",
            "north_direction": 0,
            "isOverlay": false,
            "last_rendertime": 1597078680,
            "showlocationmarker": true,
            "minZoom": 0
        }
    ]
};
