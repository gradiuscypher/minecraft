var overviewerConfig = {
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "controls": {
            "mapType": true,
            "compass": true,
            "overlays": true,
            "coordsBox": true,
            "pan": true,
            "spawn": true,
            "zoom": true
        },
        "cacheTag": "1595538172"
    },
    "CONST": {
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png"
        },
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "minZoom": 0,
            "isOverlay": false,
            "imgextension": "png",
            "path": "day",
            "showlocationmarker": true,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "zoomLevels": 8,
            "maxZoom": 8,
            "poititle": "Markers",
            "world": "world",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "base": "",
            "name": "Daytime Render",
            "north_direction": 0,
            "last_rendertime": 1595537779
        }
    ]
};
