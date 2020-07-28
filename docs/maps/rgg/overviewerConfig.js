var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "image": {
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "world": "world",
            "zoomLevels": 8,
            "isOverlay": false,
            "last_rendertime": 1595969779,
            "path": "day",
            "maxZoom": 8,
            "showlocationmarker": true,
            "defaultZoom": 1,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "base": ""
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595970164",
        "controls": {
            "pan": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "zoom": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true
    }
};
