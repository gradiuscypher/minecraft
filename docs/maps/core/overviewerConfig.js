var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "tileSize": 384
    },
    "map": {
        "controls": {
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "compass": true,
            "pan": true,
            "zoom": true,
            "spawn": true
        },
        "cacheTag": "1598180486",
        "debug": true,
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "imgextension": "png",
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "path": "day",
            "last_rendertime": 1598180280,
            "defaultZoom": 1,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "maxZoom": 10,
            "base": "",
            "showlocationmarker": true,
            "north_direction": 0,
            "name": "Daytime Render"
        }
    ],
    "worlds": [
        "Core01"
    ]
};
