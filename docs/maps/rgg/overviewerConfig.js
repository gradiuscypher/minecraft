var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "image": {
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERLEFT": 0
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1595152964",
        "debug": true,
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "north_direction": 0,
            "zoomLevels": 8,
            "path": "day",
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "minZoom": 0,
            "base": "",
            "world": "world",
            "maxZoom": 8,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "defaultZoom": 1,
            "showlocationmarker": true,
            "last_rendertime": 1595152579
        }
    ]
};
