var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "imgextension": "png",
            "path": "day",
            "defaultZoom": 1,
            "base": "",
            "name": "Daytime Render",
            "center": [
                80,
                96,
                192
            ],
            "spawn": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "north_direction": 0,
            "maxZoom": 9,
            "last_rendertime": 1594302970,
            "isOverlay": false,
            "world": "Core01",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 9
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1594303298",
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "overlays": true
        }
    }
};
