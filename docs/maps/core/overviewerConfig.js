var overviewerConfig = {
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "base": "",
            "showlocationmarker": true,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "isOverlay": false,
            "imgextension": "png",
            "north_direction": 0,
            "maxZoom": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "defaultZoom": 1,
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "last_rendertime": 1599325080,
            "poititle": "Markers"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1599325286",
        "debug": true,
        "controls": {
            "spawn": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        }
    },
    "worlds": [
        "Core01"
    ]
};
