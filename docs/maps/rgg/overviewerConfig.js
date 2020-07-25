var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "tileSize": 384,
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "worlds": [
        "world"
    ],
    "map": {
        "controls": {
            "coordsBox": true,
            "spawn": true,
            "pan": true,
            "overlays": true,
            "zoom": true,
            "compass": true,
            "mapType": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1595656990"
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "base": "",
            "path": "day",
            "maxZoom": 8,
            "zoomLevels": 8,
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "last_rendertime": 1595656579,
            "name": "Daytime Render",
            "isOverlay": false,
            "world": "world"
        }
    ]
};
