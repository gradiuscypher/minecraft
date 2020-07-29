var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "imgextension": "png",
            "base": "",
            "path": "day",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "name": "Daytime Render",
            "last_rendertime": 1596020179,
            "poititle": "Markers",
            "showlocationmarker": true,
            "maxZoom": 8,
            "north_direction": 0,
            "zoomLevels": 8
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "pan": true
        },
        "cacheTag": "1596020561",
        "north_direction": "lower-left",
        "debug": true
    }
};
