var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png"
        },
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "isOverlay": false,
            "name": "Daytime Render",
            "path": "day",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "maxZoom": 8,
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "last_rendertime": 1595800579,
            "base": ""
        }
    ],
    "map": {
        "cacheTag": "1595800961",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "compass": true,
            "overlays": true,
            "spawn": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true
        }
    }
};
