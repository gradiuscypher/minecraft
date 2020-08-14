var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "minZoom": 0,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "isOverlay": false,
            "defaultZoom": 1,
            "zoomLevels": 8,
            "maxZoom": 8,
            "base": "",
            "last_rendertime": 1597395379,
            "name": "Daytime Render",
            "poititle": "Markers",
            "path": "day",
            "showlocationmarker": true
        }
    ],
    "map": {
        "cacheTag": "1597395762",
        "controls": {
            "zoom": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true
    },
    "worlds": [
        "world"
    ]
};
