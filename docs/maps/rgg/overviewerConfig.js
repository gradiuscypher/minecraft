var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "tilesets": [
        {
            "zoomLevels": 8,
            "world": "world",
            "showlocationmarker": true,
            "imgextension": "png",
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "name": "Daytime Render",
            "isOverlay": false,
            "poititle": "Markers",
            "center": [
                3,
                80,
                12
            ],
            "path": "day",
            "minZoom": 0,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "defaultZoom": 1,
            "last_rendertime": 1596718579,
            "north_direction": 0
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "compass": true,
            "coordsBox": true,
            "mapType": true,
            "pan": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596718963"
    }
};
