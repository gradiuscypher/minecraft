var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "imgextension": "png",
            "maxZoom": 8,
            "minZoom": 0,
            "base": "",
            "path": "day",
            "world": "world",
            "showlocationmarker": true,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "last_rendertime": 1598565379,
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "north_direction": 0,
            "poititle": "Markers"
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1598565767",
        "north_direction": "lower-left",
        "controls": {
            "mapType": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "zoom": true,
            "overlays": true,
            "coordsBox": true
        },
        "debug": true
    }
};
