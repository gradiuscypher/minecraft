var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png"
        },
        "tileSize": 384,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1594868481",
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "overlays": true,
            "pan": true,
            "zoom": true,
            "mapType": true,
            "compass": true
        }
    },
    "tilesets": [
        {
            "base": "",
            "poititle": "Markers",
            "showlocationmarker": true,
            "maxZoom": 9,
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
            "isOverlay": false,
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "imgextension": "png",
            "world": "Core01",
            "minZoom": 0,
            "last_rendertime": 1594868279,
            "north_direction": 0,
            "path": "day"
        }
    ]
};
