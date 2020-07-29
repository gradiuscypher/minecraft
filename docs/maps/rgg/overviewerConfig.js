var overviewerConfig = {
    "CONST": {
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "path": "day",
            "last_rendertime": 1596027379,
            "north_direction": 0,
            "defaultZoom": 1,
            "maxZoom": 8,
            "showlocationmarker": true,
            "base": "",
            "isOverlay": false,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "poititle": "Markers",
            "minZoom": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596027763",
        "debug": true,
        "controls": {
            "spawn": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "mapType": true
        }
    }
};
