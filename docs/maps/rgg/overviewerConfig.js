var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "defaultZoom": 1,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "maxZoom": 8,
            "path": "day",
            "north_direction": 0,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "name": "Daytime Render",
            "bgcolor": "#1a1a1a",
            "world": "world",
            "base": "",
            "last_rendertime": 1595699779,
            "zoomLevels": 8
        }
    ],
    "map": {
        "debug": true,
        "controls": {
            "mapType": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "zoom": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1595700164"
    }
};
