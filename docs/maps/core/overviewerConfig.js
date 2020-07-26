var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png"
        },
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap"
    },
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595754111",
        "debug": true,
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "mapType": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "north_direction": 0,
            "isOverlay": false,
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "path": "day",
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "defaultZoom": 1,
            "world": "Core01",
            "base": "",
            "showlocationmarker": true,
            "center": [
                80,
                96,
                192
            ],
            "imgextension": "png",
            "zoomLevels": 9,
            "last_rendertime": 1595753880
        }
    ]
};
