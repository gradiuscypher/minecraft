var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        }
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "base": "",
            "name": "Daytime Render",
            "showlocationmarker": true,
            "isOverlay": false,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "last_rendertime": 1597499779,
            "maxZoom": 8,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "defaultZoom": 1,
            "world": "world",
            "path": "day",
            "zoomLevels": 8
        }
    ],
    "map": {
        "controls": {
            "spawn": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "pan": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597500163"
    }
};
