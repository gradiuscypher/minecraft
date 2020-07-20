var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "bedMarker": "bed.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "isOverlay": false,
            "imgextension": "png",
            "zoomLevels": 8,
            "minZoom": 0,
            "defaultZoom": 1,
            "bgcolor": "#1a1a1a",
            "showlocationmarker": true,
            "world": "world",
            "last_rendertime": 1595278579,
            "center": [
                3,
                80,
                12
            ],
            "north_direction": 0,
            "poititle": "Markers",
            "path": "day",
            "maxZoom": 8,
            "name": "Daytime Render"
        }
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "mapType": true,
            "pan": true,
            "overlays": true,
            "compass": true,
            "coordsBox": true,
            "zoom": true
        },
        "debug": true,
        "cacheTag": "1595278964"
    },
    "worlds": [
        "world"
    ]
};
