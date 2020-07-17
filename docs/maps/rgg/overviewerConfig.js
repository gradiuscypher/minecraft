var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png"
        }
    },
    "map": {
        "controls": {
            "compass": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true
        },
        "cacheTag": "1594980161",
        "debug": true,
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "path": "day",
            "north_direction": 0,
            "showlocationmarker": true,
            "maxZoom": 8,
            "center": [
                3,
                80,
                12
            ],
            "name": "Daytime Render",
            "imgextension": "png",
            "zoomLevels": 8,
            "poititle": "Markers",
            "world": "world",
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594979779,
            "base": "",
            "isOverlay": false
        }
    ]
};
