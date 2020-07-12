var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "LOWERRIGHT": 2,
        "tileSize": 384
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "showlocationmarker": true,
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
            "maxZoom": 8,
            "base": "",
            "world": "world",
            "zoomLevels": 8,
            "name": "Daytime Render",
            "last_rendertime": 1594522323,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "path": "day",
            "minZoom": 0,
            "north_direction": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "defaultZoom": 1
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594551915"
    }
};
