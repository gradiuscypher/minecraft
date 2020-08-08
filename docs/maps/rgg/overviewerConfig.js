var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "defaultZoom": 1,
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "north_direction": 0,
            "zoomLevels": 8,
            "maxZoom": 8,
            "path": "day",
            "base": "",
            "last_rendertime": 1596851779,
            "spawn": [
                3,
                80,
                12
            ],
            "world": "world",
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "minZoom": 0
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1596852162",
        "debug": true
    }
};
