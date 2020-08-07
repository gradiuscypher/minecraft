var overviewerConfig = {
    "CONST": {
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "world": "world",
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "isOverlay": false,
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "path": "day",
            "zoomLevels": 8,
            "showlocationmarker": true,
            "minZoom": 0,
            "base": "",
            "last_rendertime": 1596786979,
            "defaultZoom": 1
        }
    ],
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1596787364",
        "controls": {
            "coordsBox": true,
            "zoom": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "compass": true
        }
    }
};
