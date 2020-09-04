var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "image": {
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "compass": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "overlays": true
        },
        "cacheTag": "1599195686",
        "debug": true,
        "north_direction": "lower-left"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "name": "Daytime Render",
            "minZoom": 0,
            "defaultZoom": 1,
            "path": "day",
            "zoomLevels": 10,
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1599195480,
            "base": "",
            "spawn": [
                80,
                96,
                192
            ],
            "north_direction": 0,
            "maxZoom": 10,
            "poititle": "Markers",
            "imgextension": "png"
        }
    ]
};
