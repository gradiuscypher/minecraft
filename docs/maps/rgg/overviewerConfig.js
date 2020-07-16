var overviewerConfig = {
    "CONST": {
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594878979,
            "base": "",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "imgextension": "png",
            "showlocationmarker": true,
            "world": "world",
            "center": [
                3,
                80,
                12
            ],
            "zoomLevels": 8,
            "path": "day",
            "maxZoom": 8,
            "north_direction": 0,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "isOverlay": false
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594879360"
    }
};
