var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "compass": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true,
            "spawn": true,
            "overlays": true,
            "mapType": true
        },
        "cacheTag": "1595088080"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "zoomLevels": 9,
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "center": [
                80,
                96,
                192
            ],
            "defaultZoom": 1,
            "north_direction": 0,
            "name": "Daytime Render",
            "last_rendertime": 1595087880,
            "poititle": "Markers",
            "base": "",
            "isOverlay": false,
            "path": "day",
            "imgextension": "png",
            "maxZoom": 9,
            "showlocationmarker": true,
            "minZoom": 0
        }
    ]
};
