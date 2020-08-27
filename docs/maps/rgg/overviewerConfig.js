var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "signMarker": "signpost_icon.png",
            "defaultMarker": "signpost.png"
        },
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "isOverlay": false,
            "maxZoom": 8,
            "name": "Daytime Render",
            "world": "world",
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1598540179,
            "defaultZoom": 1,
            "imgextension": "png",
            "zoomLevels": 8,
            "poititle": "Markers",
            "minZoom": 0,
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "path": "day"
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598540568",
        "controls": {
            "pan": true,
            "mapType": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "zoom": true,
            "spawn": true
        }
    },
    "worlds": [
        "world"
    ]
};
