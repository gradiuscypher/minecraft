var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "zoomLevels": 8,
            "name": "Daytime Render",
            "isOverlay": false,
            "defaultZoom": 1,
            "base": "",
            "north_direction": 0,
            "path": "day",
            "imgextension": "png",
            "maxZoom": 8,
            "poititle": "Markers",
            "world": "world",
            "minZoom": 0,
            "showlocationmarker": true,
            "last_rendertime": 1595325379,
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
            "bgcolor": "#1a1a1a"
        }
    ],
    "map": {
        "controls": {
            "overlays": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true,
            "spawn": true
        },
        "cacheTag": "1595325760",
        "north_direction": "lower-left",
        "debug": true
    }
};
