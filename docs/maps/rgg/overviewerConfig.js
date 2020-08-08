var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0
    },
    "tilesets": [
        {
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "zoomLevels": 8,
            "imgextension": "png",
            "name": "Daytime Render",
            "last_rendertime": 1596884179,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "poititle": "Markers",
            "maxZoom": 8,
            "isOverlay": false,
            "base": "",
            "showlocationmarker": true,
            "path": "day",
            "world": "world",
            "center": [
                3,
                80,
                12
            ]
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "cacheTag": "1596884563",
        "debug": true,
        "controls": {
            "compass": true,
            "zoom": true,
            "mapType": true,
            "spawn": true,
            "coordsBox": true,
            "pan": true,
            "overlays": true
        }
    },
    "worlds": [
        "world"
    ]
};
