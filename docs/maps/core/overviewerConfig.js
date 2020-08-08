var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "compass": true,
            "zoom": true,
            "pan": true,
            "overlays": true,
            "coordsBox": true,
            "mapType": true
        },
        "cacheTag": "1596848483",
        "debug": true
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "minZoom": 0,
            "zoomLevels": 10,
            "path": "day",
            "north_direction": 0,
            "last_rendertime": 1596848280,
            "showlocationmarker": true,
            "base": "",
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "center": [
                80,
                96,
                192
            ],
            "name": "Daytime Render",
            "world": "Core01",
            "maxZoom": 10,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "defaultZoom": 1
        }
    ]
};
