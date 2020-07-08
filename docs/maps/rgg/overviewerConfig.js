var overviewerConfig = {
    "worlds": [
        "world"
    ],
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png"
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "isOverlay": false,
            "bgcolor": "#1a1a1a",
            "minZoom": 0,
            "path": "day",
            "maxZoom": 8,
            "name": "Daytime Render",
            "base": "",
            "world": "world",
            "north_direction": 0,
            "zoomLevels": 8,
            "imgextension": "png",
            "showlocationmarker": true,
            "last_rendertime": 1594223780,
            "center": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1594224202",
        "controls": {
            "coordsBox": true,
            "compass": true,
            "overlays": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "pan": true
        }
    }
};
