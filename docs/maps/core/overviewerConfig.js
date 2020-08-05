var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "spawn": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true,
            "overlays": true,
            "mapType": true
        },
        "cacheTag": "1596661283",
        "debug": true
    },
    "tilesets": [
        {
            "minZoom": 0,
            "spawn": [
                80,
                96,
                192
            ],
            "poititle": "Markers",
            "base": "",
            "world": "Core01",
            "bgcolor": "#1a1a1a",
            "isOverlay": false,
            "imgextension": "png",
            "name": "Daytime Render",
            "maxZoom": 10,
            "last_rendertime": 1596661080,
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "path": "day",
            "north_direction": 0,
            "zoomLevels": 10,
            "defaultZoom": 1
        }
    ]
};
