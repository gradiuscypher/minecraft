var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "poititle": "Markers",
            "zoomLevels": 8,
            "imgextension": "png",
            "north_direction": 0,
            "center": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "base": "",
            "path": "day",
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "maxZoom": 8,
            "isOverlay": false,
            "last_rendertime": 1596516979,
            "showlocationmarker": true
        }
    ],
    "map": {
        "debug": true,
        "cacheTag": "1596517440",
        "controls": {
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "compass": true
        },
        "north_direction": "lower-left"
    }
};
