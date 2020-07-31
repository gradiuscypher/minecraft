var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "coordsBox": true
        },
        "cacheTag": "1596214882",
        "debug": true,
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "path": "day",
            "base": "",
            "name": "Daytime Render",
            "poititle": "Markers",
            "world": "Core01",
            "maxZoom": 10,
            "isOverlay": false,
            "zoomLevels": 10,
            "showlocationmarker": true,
            "imgextension": "png",
            "defaultZoom": 1,
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1596214680
        }
    ]
};
