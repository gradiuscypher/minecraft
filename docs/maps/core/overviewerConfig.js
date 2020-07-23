var overviewerConfig = {
    "map": {
        "cacheTag": "1595545304",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "overlays": true,
            "pan": true,
            "zoom": true
        }
    },
    "worlds": [
        "Core01"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "bedMarker": "bed.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "LOWERRIGHT": 2
    },
    "tilesets": [
        {
            "spawn": [
                80,
                96,
                192
            ],
            "maxZoom": 9,
            "minZoom": 0,
            "world": "Core01",
            "zoomLevels": 9,
            "imgextension": "png",
            "name": "Daytime Render",
            "defaultZoom": 1,
            "north_direction": 0,
            "showlocationmarker": true,
            "path": "day",
            "last_rendertime": 1595545202,
            "base": "",
            "poititle": "Markers",
            "center": [
                80,
                96,
                192
            ],
            "isOverlay": false,
            "bgcolor": "#1a1a1a"
        }
    ]
};
