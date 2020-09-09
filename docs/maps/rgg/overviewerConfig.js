var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "isOverlay": false,
            "name": "Daytime Render",
            "poititle": "Markers",
            "base": "",
            "last_rendertime": 1599609379,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "imgextension": "png",
            "maxZoom": 8,
            "path": "day",
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "world": "world",
            "zoomLevels": 8
        }
    ],
    "map": {
        "controls": {
            "pan": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true,
            "zoom": true
        },
        "debug": true,
        "cacheTag": "1599609772",
        "north_direction": "lower-left"
    }
};
