var overviewerConfig = {
    "tilesets": [
        {
            "name": "Daytime Render",
            "defaultZoom": 1,
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "poititle": "Markers",
            "north_direction": 0,
            "base": "",
            "showlocationmarker": true,
            "maxZoom": 8,
            "world": "world",
            "path": "day",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "last_rendertime": 1599472579
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "controls": {
            "pan": true,
            "compass": true,
            "coordsBox": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "cacheTag": "1599472969"
    },
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    }
};
