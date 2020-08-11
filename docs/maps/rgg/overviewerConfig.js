var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "base": "",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "path": "day",
            "minZoom": 0,
            "north_direction": 0,
            "defaultZoom": 1,
            "poititle": "Markers",
            "last_rendertime": 1597114579,
            "zoomLevels": 8,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "world": "world"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true
        },
        "cacheTag": "1597114965",
        "debug": true
    }
};
