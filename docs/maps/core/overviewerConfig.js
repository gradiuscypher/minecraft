var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "tilesets": [
        {
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "path": "day",
            "north_direction": 0,
            "last_rendertime": 1597744680,
            "maxZoom": 10,
            "base": "",
            "showlocationmarker": true,
            "imgextension": "png",
            "zoomLevels": 10,
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "name": "Daytime Render",
            "minZoom": 0
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "zoom": true
        },
        "cacheTag": "1597744883",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ]
};
