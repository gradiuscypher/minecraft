var overviewerConfig = {
    "tilesets": [
        {
            "showlocationmarker": true,
            "path": "day",
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "maxZoom": 8,
            "world": "world",
            "poititle": "Markers",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "defaultZoom": 1,
            "minZoom": 0,
            "last_rendertime": 1595458579,
            "zoomLevels": 8
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true
        },
        "debug": true,
        "cacheTag": "1595458960"
    },
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
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
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        }
    }
};
