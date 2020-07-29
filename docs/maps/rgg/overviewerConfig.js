var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384
    },
    "tilesets": [
        {
            "minZoom": 0,
            "isOverlay": false,
            "north_direction": 0,
            "imgextension": "png",
            "path": "day",
            "zoomLevels": 8,
            "world": "world",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
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
            "poititle": "Markers",
            "base": "",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "maxZoom": 8,
            "last_rendertime": 1596048979
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "cacheTag": "1596049364",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "spawn": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true
        }
    }
};
