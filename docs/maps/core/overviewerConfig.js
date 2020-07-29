var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "imgextension": "png",
            "maxZoom": 10,
            "path": "day",
            "world": "Core01",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "bgcolor": "#1a1a1a",
            "base": "",
            "poititle": "Markers",
            "minZoom": 0,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "zoomLevels": 10,
            "last_rendertime": 1596002395
        }
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596002522",
        "debug": true,
        "controls": {
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true
        }
    }
};
