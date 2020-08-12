var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1
    },
    "tilesets": [
        {
            "world": "world",
            "path": "day",
            "showlocationmarker": true,
            "maxZoom": 8,
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "imgextension": "png",
            "base": "",
            "zoomLevels": 8,
            "name": "Daytime Render",
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "last_rendertime": 1597200979,
            "poititle": "Markers",
            "minZoom": 0,
            "north_direction": 0
        }
    ],
    "map": {
        "controls": {
            "zoom": true,
            "compass": true,
            "spawn": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true
        },
        "debug": true,
        "cacheTag": "1597201369",
        "north_direction": "lower-left"
    },
    "worlds": [
        "world"
    ]
};
