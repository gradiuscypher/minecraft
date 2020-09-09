var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png"
        },
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0
    },
    "map": {
        "cacheTag": "1599638486",
        "debug": true,
        "controls": {
            "mapType": true,
            "zoom": true,
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "compass": true,
            "overlays": true
        },
        "north_direction": "lower-left"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "name": "Daytime Render",
            "imgextension": "png",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 10,
            "world": "Core01",
            "isOverlay": false,
            "north_direction": 0,
            "last_rendertime": 1599638280,
            "base": "",
            "showlocationmarker": true,
            "maxZoom": 10,
            "poititle": "Markers",
            "spawn": [
                80,
                96,
                192
            ],
            "minZoom": 0,
            "center": [
                80,
                96,
                192
            ],
            "path": "day"
        }
    ]
};
