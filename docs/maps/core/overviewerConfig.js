var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1597435283",
        "controls": {
            "zoom": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true,
            "compass": true,
            "spawn": true
        },
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "path": "day",
            "world": "Core01",
            "minZoom": 0,
            "maxZoom": 10,
            "last_rendertime": 1597435080,
            "poititle": "Markers",
            "imgextension": "png",
            "base": "",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "north_direction": 0,
            "showlocationmarker": true,
            "zoomLevels": 10,
            "spawn": [
                80,
                96,
                192
            ],
            "name": "Daytime Render"
        }
    ]
};
