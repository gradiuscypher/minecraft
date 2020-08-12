var overviewerConfig = {
    "tilesets": [
        {
            "maxZoom": 10,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "base": "",
            "zoomLevels": 10,
            "isOverlay": false,
            "showlocationmarker": true,
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "path": "day",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "center": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "last_rendertime": 1597244280
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1597244483",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "zoom": true,
            "pan": true,
            "compass": true,
            "coordsBox": true
        }
    },
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ]
};
