var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "map": {
        "cacheTag": "1595880087",
        "controls": {
            "mapType": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true,
            "pan": true,
            "spawn": true,
            "overlays": true
        },
        "north_direction": "lower-left",
        "debug": true
    },
    "tilesets": [
        {
            "path": "day",
            "imgextension": "png",
            "showlocationmarker": true,
            "last_rendertime": 1595879880,
            "isOverlay": false,
            "world": "Core01",
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "minZoom": 0,
            "base": "",
            "poititle": "Markers",
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
